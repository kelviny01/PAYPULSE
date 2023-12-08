const accordionItem = document.querySelectorAll(".faq-accordionItem");

accordionItem.forEach((item) => {
  const accordionHeaderItem = item.querySelector(".faq-accordionHeader");

  const accordionStrong = item.querySelectorAll(
    ".faq-accordionHeader > strong"
  );

  accordionHeaderItem.addEventListener("click", () => {
    const accordionContentItem = item.querySelector(".faq-accordionContent");

    const contentActived = document.querySelector(".active");

    verfiyActive(item, accordionContentItem, contentActived, accordionStrong);
  });
});

function verfiyActive(item, content, contentActived) {
  const iconItem = item.querySelector(".faq-accordionIcon img");

  const allIcons = item.querySelectorAll(".faq-accordionIcon img");

  allIcons.forEach((item) => {
    item.src = "image/iconPlus.svg";
  });

  if (contentActived != null) {
    contentActived.style.height = 0;
    contentActived.classList.remove("active");
  }

  if (content !== contentActived) {
    iconItem.src = "image/iconMinus.svg";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}
