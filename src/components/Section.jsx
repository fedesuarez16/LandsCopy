import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-8 lg:py-4 xl:py-4${crosses ? " " : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      

      {crosses && (
        <>
          
        </>
      )}
    </div>
  );
};

export default Section;
