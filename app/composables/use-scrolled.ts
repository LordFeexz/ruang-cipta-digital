export default function () {
  const scrolled = useState("scrolled", () => false);
  const handler = () => {
    scrolled.value = window.scrollY > 0;
  };

  onMounted(() => {
    window.addEventListener("scroll", handler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handler);
  });

  return scrolled;
}
