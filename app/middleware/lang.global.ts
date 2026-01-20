import { LANG, LANGS } from "#shared/enums/global";

export default defineNuxtRouteMiddleware((to) => {
  if (
    /^\/(?:_nuxt|api|scripts|.*\.(?:png|jpe?g|svg|gif|ico|webp|avif|xml|txt|webmanifest))/.test(
      to.path
    )
  ) {
    return;
  }
  if (to.path === "/") return navigateTo(`/${LANG.EN}`, { redirectCode: 302 });

  const paths = to.path.split("/");
  const { setLang } = useLang();
  const currentLang = paths[1] as LANG;

  if (!LANGS.includes(currentLang)) {
    paths[1] = LANG.EN;
    setLang(LANG.EN);
    return navigateTo(paths.join("/"));
  }

  setLang(currentLang);
});
