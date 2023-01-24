document.querySelectorAll('.price').forEach(node => {
  console.log(node);
  node.textContent = new Intl.NumberFormat('uk-UA', {
    currency: 'uah',
    style: 'currency'
  }).format(node.textContent)
})