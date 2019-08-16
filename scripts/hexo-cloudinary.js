// {% cloudinary src [alt] [class] %}
function cloudinaryTagRender(args) {
  if (!args[0]) {
    return "";
  }

  const imgSrc = args[0];
  const imgAlt = args[1] || "";
  const imgClass = args[2] || "";

  return (
    '<img class="' +
    imgClass +
    '" alt="' +
    imgAlt +
    '" src="' +
    'http://res.cloudinary.com/itsacoyote/image/upload/t_post-image/' + 
    imgSrc +
    '">'
  );
}
  
hexo.extend.tag.register("clPost", cloudinaryTagRender);