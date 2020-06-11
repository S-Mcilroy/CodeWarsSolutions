// 5 kyu on CodeWars

//Solution:

function parseMolecule(formula) {
  const BRACKET_OPENER_REGEXP = /\[|\{|\(/;
  const BRACKET_CLOSER_REGEXP = /\]|\}|\)/;
  const VALID_ATOM_REGEXP = /^[A-Z][a-z]?$/;
  const MULTIPLIER_REGEXP = /^\d+/;

  function createGroup(parent = {}) {
    return {atoms : {}, groups : [], multiplier : 1, parent};
  }

  function extractGroups(str) {
    const collection = createGroup();
    let currentGroup = collection;

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      let isCloser = false;
      let atom;
      let multiplier = 1;

      if (BRACKET_OPENER_REGEXP.test(currentChar)) {
        const parentGroup = currentGroup;
        currentGroup = createGroup(parentGroup);
        parentGroup.groups.push(currentGroup);

        continue;
      }
      else if (BRACKET_CLOSER_REGEXP.test(currentChar)) {
        isCloser = true;
      }
      else if (VALID_ATOM_REGEXP.test(currentChar)) {
        const currentChar = str[i];
        const extendedChars = currentChar + str[i + 1];
        atom = currentChar;

        if (VALID_ATOM_REGEXP.test(extendedChars)) {
          atom = extendedChars;
          i++;
        }
      }

        const multiplierMatch = str.slice(i + 1).match(MULTIPLIER_REGEXP);

      if (multiplierMatch) {
        const multiplierStr = multiplierMatch[0];
        multiplier = +multiplierStr;
        i += multiplierStr.length;
      }

      if (isCloser) {
        currentGroup.multiplier = multiplier;
        currentGroup = currentGroup.parent;
      }
      else {
        const currentAtomCount = currentGroup.atoms[atom] || 0;
        currentGroup.atoms[atom] = currentAtomCount + multiplier;
      }
    }

    return collection;
  }

  function sumGroup(group, cumulatedMultiplier = 1, acc = {}) {
    const {groups, multiplier, atoms} = group;

    cumulatedMultiplier *= multiplier;

    for (let i = 0; i < groups.length; i++) {
      sumGroup(groups[i], cumulatedMultiplier, acc);
    }

    Object.keys(atoms).forEach(atom => {
      const prevCount = acc[atom] || 0;
      const count = atoms[atom];

      acc[atom] = prevCount + (count * cumulatedMultiplier);
    });

    return acc;
  }

  const collection = extractGroups(formula);
  return sumGroup(collection);
}
