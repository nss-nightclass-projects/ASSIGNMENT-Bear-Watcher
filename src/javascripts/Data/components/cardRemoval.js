const cardRemoval = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    bears.splice(targetId, 1);
  }

  bearBuilder(bears);
};
