export default val => {
  if (typeof val === "string") {
    return val.replace(/<[^>]+>/g, "");
  } else if (typeof val === "object") {
    let newObj = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "string") {
        newObj[key] = value.replace(/<[^>]+>/g, "");
      } else if (typeof value === "object") {
        Object.entries(obj).forEach(([key, value]) => {
          newObj[key] = value.replace(/<[^>]+>/g, "");
        });
      }
    });
    return newObj;
  }
};
