/**
 * Created by itretyakov on 4/2/18.
 */
export default function order() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
  });
}
