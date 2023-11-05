const tiyFizzBuzz = (sentence) => {
  return [...sentence].reduce((acc, curr) => {
    if (/[B-DF-HJ-NP-TV-Z]/.test(curr)) acc += 'Iron'; 
    else if (/[AEIOU]/.test(curr)) acc += 'Iron Yard';
    else if (/[aeiou]/.test(curr)) acc += 'Yard';
    else acc += curr;
    return acc;
  }, '');
}