import { Elysia, status, t } from "elysia";

export default () =>
  new Elysia({
    precompile: true,
  })
    .post(
      "/midtrans/notify",
      async ({
        body: {
          order_id,
          status_code,
          gross_amount,
          signature_key,
          transaction_status,
        },
      }) => {
        const {
          public: { BLOG_PRESS_URL, APPLY_MATE_URL, DIGITOOL_URL },
        } = useRuntimeConfig();
        const targetUrl = (() => {
          switch (true) {
            case order_id.startsWith("AM"):
              return `${
                APPLY_MATE_URL || "http://localhost:3001/api"
              }/transaction/notify`;
            case order_id.startsWith("BP"):
              return `${
                BLOG_PRESS_URL || "http://localhost:3002/api"
              }/billing/notification`;
            case order_id.startsWith("DGTL"):
              return `${
                DIGITOOL_URL || "http://localhost:5173/api"
              }/transaction/notification`;
            default:
              return null;
          }
        })();

        if (!targetUrl)
          return status(400, {
            code: 400,
            message:
              "Invalid order_id prefix. Order ID must start with 'am', 'bp', or 'dgtl'",
            data: null,
            errors: null,
          });

        try {
          const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_id,
              status_code,
              gross_amount,
              signature_key,
              transaction_status,
            }),
          });
          console.log(response);

          const data = await response.json();
          return status(response.status, data);
        } catch (error: unknown) {
          return status(500, {
            code: 500,
            message: "Failed to process notification",
            data: null,
            errors: error instanceof Error ? error.message : "Unknown error",
          });
        }
      },
      {
        body: t.Object({
          order_id: t.String(),
          status_code: t.String(),
          gross_amount: t.String(),
          signature_key: t.String(),
          transaction_status: t.String(),
        }),
      },
    )
    .post(
      "/lemonsqueezy/notify",
      async (ctx) => {
        const body = ctx.body as Record<string, any>;
        const {
          public: { APPLY_MATE_URL, DIGITOOL_URL },
        } = useRuntimeConfig();

        const appName = body?.meta?.custom_data?.app_name;

        if (!appName) {
          console.error(
            "[LemonSqueezy] Missing app_name in meta.custom_data",
          );
          return status(400, {
            code: 400,
            message:
              "Missing app_name in meta.custom_data. Checkout must include custom_data with app_name.",
            data: null,
            errors: null,
          });
        }

        const routeMap: Record<string, string> = {
          digitool: `${
            DIGITOOL_URL || "http://localhost:5173/api"
          }/lemonsqueezy/webhook`,
          apply_mate: `${
            APPLY_MATE_URL || "http://localhost:3001/api"
          }/lemonsqueezy/webhook`,
        };

        const targetUrl = routeMap[appName];

        if (!targetUrl) {
          console.error(
            `[LemonSqueezy] Unknown app_name: ${appName}`,
          );
          return status(400, {
            code: 400,
            message: `Unknown app_name: '${appName}'. Must be one of: ${Object.keys(routeMap).join(", ")}`,
            data: null,
            errors: null,
          });
        }

        const eventName =
          body?.meta?.event_name || "unknown";

        console.log(
          `[LemonSqueezy] Routing event '${eventName}' to ${appName} → ${targetUrl}`,
        );

        try {
          const response = await fetch(targetUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          const data = await response.json();

          console.log(
            `[LemonSqueezy] ${appName} responded with status ${response.status}`,
          );

          return status(response.status, data);
        } catch (error: unknown) {
          console.error(
            `[LemonSqueezy] Failed to forward to ${appName}:`,
            error,
          );
          return status(500, {
            code: 500,
            message: `Failed to forward webhook to ${appName}`,
            data: null,
            errors:
              error instanceof Error
                ? error.message
                : "Unknown error",
          });
        }
      },
    );
