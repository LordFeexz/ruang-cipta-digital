import { Elysia, status, t } from "elysia";

export default () =>
  new Elysia({
    precompile: true,
  }).post(
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
        public: { BLOG_PRESS_URL, APPLY_MATE_URL },
      } = useRuntimeConfig();
      const targetUrl = (() => {
        switch (true) {
          case order_id.startsWith("am"):
            return `${
              APPLY_MATE_URL || "http://localhost:3001/api"
            }/transaction/notify`;
          case order_id.startsWith("bp"):
            return `${
              BLOG_PRESS_URL || "http://localhost:3002/api"
            }/billing/notification`;
          default:
            return null;
        }
      })();

      if (!targetUrl)
        return status(400, {
          code: 400,
          message:
            "Invalid order_id prefix. Order ID must start with 'am' or 'bp'",
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

        const data = await response.json();
        return status(response.status, data);
      } catch (error: any) {
        return status(500, {
          code: 500,
          message: "Failed to process notification",
          data: null,
          errors: error.message,
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
  );
