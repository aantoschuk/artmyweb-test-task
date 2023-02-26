# ArtMyWeb test task

## інформація

Команда ```yarn start``` запускає проект.

Використовував React, TypeScript, redux, redux-saga, redux-toolkit, styled-component, vite, json-server.

## <subject-code> field

Не вдалося згенерувати динамічний ключ для об'єкту *marks*, інакше, використовув тоді би так

```typescript
// отримав масив ключів
const keys = Object.keys(marks);
// ітерація по цьому масиву 
keys.map((key: string) => {
  // отримуємо значення по ключу
  console.log(mark[key]);
})

```

Тому щоб не мати додаткової вкладеності, яка не впливає ні на що - прибрав `<subject-code>` поле