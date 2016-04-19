function theO(size) {
  if (size > 0) {
    for (var i = size; i > 0; i--) {
      console.log('Trolllllllolololoooooooooooooo Trolololoooooolooooooololooooo');
      theO(i - 1);
    }
  } else {
    return;
  }

}

theO(3);
