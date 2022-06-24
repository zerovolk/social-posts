export default {
    mounted(el, binding) {
        const options = { // Этот код нужен для подгрузки постов как лента вк
          rootMargin: '0px',
          threshold: 1.0
        }
        const callback = (entries, observer) => {
          /* Content excerpted, show below */
          if (entries[0].isIntersecting) {
            binding.value()
          }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection'
}