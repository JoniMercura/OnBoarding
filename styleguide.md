# Mercura React/JSX Style Guide

*A mostly reasonable approach to React and JSX, inspired (copied) from [Airbnb styleguide](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js)*

This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide.

## Table of Contents

- [Mercura React/JSX Style Guide](#mercura-reactjsx-style-guide)
	- [Table of Contents](#table-of-contents)
	- [Basic Rules](#basic-rules)
	- [Naming](#naming)
	- [Alignment](#alignment)
	- [Quotes](#quotes)
	- [Spacing](#spacing)
	- [Props](#props)
	- [Refs](#refs)
	- [Parentheses](#parentheses)
	- [Tags](#tags)
	- [Methods](#methods)
	- [Functions](#functions)
	- [Enums](#enums)
	- [Source](#source)


## Basic Rules

  - Only include one React component per file.
    - However, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file. eslint: [`react/no-multi-comp`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - Always use JSX syntax.
  - Do not use `React.createElement` unless you’re initializing the app from a file that is not JSX.
  - Indentation is done using tabs 


## Naming

  - **Extensions**: Use `.tsx` extension for React components. eslint: [`react/jsx-filename-extension`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **Component Naming**: Use the filename as the component name. For example, `ReservationCard.tsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.tsx` as the filename and use the directory name as the component name:

    ```jsx
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```

  - **Props Naming**: Avoid using DOM component prop names for different purposes.

    > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

    ```jsx
    // bad
    <MyComponent style="fancy" />

    // bad
    <MyComponent className="fancy" />

    // good
    <MyComponent variant="fancy" />
    ```

## Alignment

  - Follow these alignment styles for JSX syntax. eslint: [`react/jsx-closing-bracket-location`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

    ```jsx
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>

    // bad
    {showButton &&
      <Button />
    }

    // bad
    {
      showButton &&
        <Button />
    }

    // good
    {showButton && (
      <Button />
    )}

    // good
    {showButton && <Button />}

    // good
    {someReallyLongConditional
      && anotherLongConditional
      && (
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        />
      )
    }

    // good
    {someConditional ? (
      <Foo />
    ) : (
      <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz"
      />
    )}
    ```

## Quotes
  - Always use double quotes (`"`). eslint: [`quotes`](https://eslint.org/docs/latest/rules/quotes)

    ```jsx
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
	<Foo style={{ left: '20px' }} />

    // good
    <Foo style={{ left: "20px" }} />
    ```

## Spacing

  - Always include a single space in your self-closing tag. eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

    ```jsx
    // bad
    <Foo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Foo />
    ```

  - Do not pad JSX curly braces with spaces. eslint: [`react/jsx-curly-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // bad
    <Foo bar={ baz } />

    // good
    <Foo bar={baz} />
    ```

## Props

  - Always use camelCase for prop names, or PascalCase if the prop value is a React component.

    ```jsx
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
      Component={SomeComponent}
    />
    ```

  - Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo
      hidden
    />

    // good
    <Foo hidden />
    ```

  - Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

We don’t recommend using indexes for keys if the order of items may change.

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```


## Refs

  - Always use ref callbacks. eslint: [`react/no-string-refs`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // bad
    <Foo
      ref="myRef"
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```

## Parentheses

  - Wrap JSX tags in parentheses when they span more than one line. eslint: [`react/jsx-wrap-multilines`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

    ```jsx
    // bad
    render() {
      return <MyComponent variant="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // good
    render() {
      return (
        <MyComponent variant="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // good, when single line
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## Tags

  - Always self-close tags that have no children. eslint: [`react/self-closing-comp`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // bad
    <Foo variant="stuff"></Foo>

    // good
    <Foo variant="stuff" />
    ```

  - If your component has multiline properties, close its tag on a new line. eslint: [`react/jsx-closing-bracket-location`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // bad
    <Foo
      bar="bar"
      baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Methods

  - Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they [do not massively hurt performance](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/), in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.

    ```jsx
    function ItemList(props) {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={(event) => { doSomethingWith(event, item.name, index); }}
            />
          ))}
        </ul>
      );
    }
    ```
## Functions
  - Prefer arrow functions whenever possible to avoid edgecases with [hoisting](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html) and the confusing `this` keyword. Normal function declarations are allowed but issue warnings to suggest arrow functions instead.
  ```js
  // bad
  const foo = function() {

  }
  // warning
  function bar() {

  }

  // good
  const baz = () => {

  }

  ```
## Enums
The below excerpt from [this page](https://www.npmjs.com/package/eslint-plugin-typescript-enum) has pretty good explaination as for why Enums shouldn't be used. 

>From [TypeScript Handbook on Enums](https://www.typescriptlang.org/docs/handbook/enums.html):<br> 
>>Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
>
>In other words, TypeScript enums have their corresponsing runtime representations, they are not erased from your emitted JavaScript files after being compiled. This conflicts with one of the [TypeScript Design Non-goals](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals#non-goals):
>
>>Provide additional runtime functionality or libraries. Instead, use TypeScript to describe existing libraries.
>
>Having this TypeScript feature extending into your compiled JavaScript also conflicts with the TypeScript slogan of being a typed superset of JavaScript, which further introduces vendor lock-in.

Using `as const` arrays or objects, or simply string unions is better in most cases. You can read more [here](https://2ality.com/2020/02/enum-alternatives-typescript.html), especially in sections 1, 2 and 3.1

```ts
// Bad
enum DIRECTIONS {
	"north",
	"east",
	"south",
	"west"
}
// Bad
enum DIRECTIONS {
	NORTH = "north",
	EAST = "east",
	SOUTH = "south",
	WEST = "west",
}

// Good, if you only want the type
type Direction = "north" | "east" | "south" | "west";

// Good, if you want both the type and the values
const directions = ["north", "east", "south", "west"] as const;
type Direction = typeof directions[number];

// Good, if you want both the type and the values, and to able to access enum members with dot notation instead of only string literals
const DIRECTIONS = {
	NORTH: "north",
	EAST: "east",
	SOUTH: "south",
	WEST: "west",
} as const;

type Direction = typeof DIRECTIONS[keyof typeof DIRECTIONS];
```

## Source

  This JSX/React style guide is copied and modified from the [`Airbnb styleguide`](https://github.com/airbnb/javascript/tree/master)


**[⬆ back to top](#table-of-contents)**