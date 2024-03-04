import { useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoryPreviewRoute = () => {
  const { CategoryMap } = useContext(CategoryContext);
  return (
    <>
      {Object.keys(CategoryMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={CategoryMap[title]}
          />
        );
      })}
    </>
  );
};

export default CategoryPreviewRoute;
