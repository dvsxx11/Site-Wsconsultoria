const sectionPlaceholders = document.querySelectorAll("[data-source]");

async function loadSection(placeholder) {
  const source = placeholder.dataset.source;
  const response = await fetch(source);

  if (!response.ok) {
    throw new Error(`Não foi possível carregar a seção: ${source}`);
  }

  const markup = await response.text();
  const template = document.createElement("template");

  template.innerHTML = markup.trim();
  placeholder.replaceWith(template.content);
}

try {
  await Promise.all([...sectionPlaceholders].map(loadSection));
  await import("./main.js");
} catch (error) {
  console.error(error);
}
