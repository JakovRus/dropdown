type ClassNamesObj = {
  [key: string]: boolean;
}

type ClassNames = (string | undefined | ClassNamesObj)[];

export function classnames(...classNames: ClassNames) {
  const className = Array.from(classNames)
    .reduce((result, current) => {
      if (!current) {
        return result;
      }

      return (typeof current === "string")
        ? `${result} ${current}`
        : `${result} ${computeClassnameFromObj(current)}`;
    }, "");

  return (className as string).slice(1);
}

function computeClassnameFromObj(classNamesObj: ClassNamesObj) {
  return Object.keys(classNamesObj)
    .reduce((result, currentKey) => {
      return classNamesObj[currentKey]
        ? `${result} ${currentKey}`
        : result;
    }, "")
    .slice(1);
}
