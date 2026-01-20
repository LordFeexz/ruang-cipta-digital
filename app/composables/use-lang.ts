import { LANG } from "#shared/enums/global";

export default function () {
  const route = useRoute();

  const currentLang = useState<LANG>(
    "currentLang",
    () => (route.params.lang as LANG) || LANG.ID
  );

  watch(
    () => route.params.lang,
    (newLang) => {
      if (newLang && newLang !== currentLang.value) {
        currentLang.value = newLang as LANG;
      }
    }
  );

  const setLang = (lang: LANG) => {
    if (lang === currentLang.value) return;

    const pathWithoutLang = route.path.replace(/^\/[a-z]{2}/, "");
    navigateTo(`/${lang}${pathWithoutLang}?preserveScroll=true`);
  };

  return {
    lang: currentLang,
    setLang,
  };
}
