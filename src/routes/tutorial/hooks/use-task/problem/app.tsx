import { component$, useTask$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useTask$(({ track, cleanup }) => {
    // Используйте track для повторного запуска этой функции при изменении свойства `value` в хранилище.

    // Установите таймер для копирования `value => debouncedValue` через полсекунды.

    // Возвращаем функцию очистки в случае, если свойство `value` изменится до истечения времени.
    cleanup(() => {
      // код очистки
    });
  });
  return (
    <>
      <input
        value={store.value}
        onInput$={(event) => (store.value = (event.target as HTMLInputElement).value)}
      />
      <br />
      Текущее значение: {store.value}
      <br />
      Дебаунс-значение: {store.debouncedValue}
    </>
  );
});
