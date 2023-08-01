const colors = {
    p: '#ea580c',
    div: '#ca8a04',
    span: '#3f6212',
    section: '#06b6d4',
    ul: '#4338ca',
    ol: '#a855f7',
    div: '#701a75',
    nav: '#047857',
    footer: '#172554',
    body: '#db2777',
    padrao: '#451a03',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }

}



document.querySelectorAll(".tag").forEach((box) => {
  const tagName = box.tagName.toLowerCase();

  box.style.borderColor = colors.get(tagName);
  if (!box.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    box.insertBefore(label, box.childNodes[0]);
  }
});
