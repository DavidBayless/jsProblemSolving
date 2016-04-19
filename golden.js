function goldenRecurse(a, b, tol) {
  if (((a+b)/a === a/b) && (a > b) && (b > 0)) {
    return a/b;
  } else {
    return goldenRecurse()
  }
}
