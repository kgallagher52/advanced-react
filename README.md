# Advanced React

Learning Advanced React concepts, Design System, Design Patterns, Performance

## Resources

[Udemy Course](https://www.udemy.com/course/advanced-react)

# Design Patterns

### Layout Components Section 2

- They focus on organizing other components within a web page.
  - Layout Components Patterns
    - Split Screen
    - Lists
    - Modals
- The core content components of our pages, should be unaware and unconcerned about their precise location within the page structure. Meaning children of a layout component shouldn't care about there position on the page just how they look.

### Container Components Section 3

- They handle data loading & data management on behalf of their child components.
- Components are unaware of the source or management of their data meaning the children shouldn't know where the data is coming from.

  **Not Container component (WRONG) :(**

  ```jsx
  const Component = () => {
    // Manage Data
    const [data, setData] = useState();

    useEffect(()=>{...},[]);

    return (
      // Display Data in JSX
    )
  }

  ```

  **Is Container component (RIGHT) :)**

  ```jsx
  const Component = () => {
    // Manage Data
    const [data, setData] = useState();

    // Load Data
    useEffect(()=>{...},[]);

    return (
      // Pass data to children as props
      <ChildComponent data={ data } />
    )
  }

  ```

- React.isValidElement(child) -> this is verifying that the component is valid.

**Passing Additional props into child component using cloneElement()**

```jsx
<>
	{React.Children.map((children, child) => {
		// Validation
		if (React.isValidElement(child)) {
			/* Clone the element so we can pass additional props to it */
			return React.cloneElement(child, { user });
		}
		return child;
	})}
</>
```

### Controlled and Uncontrolled Components Section 4

- **Uncontrolled Concept Components**
  - The Component itself manages its own internal state like a form

```jsx
const UncontrolledComponent = ({ onSubmit }) => {
	/* State managed by the component itself */
	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

<>
<UncontrolledComponent onSubmit={(data) => {...}} />
</>
```

- **Controlled Concept Components**
  - The Parent component is responsible for managing the state (passed state by props)

```jsx
const ControlledComponent = ({onSubmit, value, onChange} => {
  return (
   	<form onSubmit>
			<input type="text" value onChange />
			<button type="submit">Submit</button>
		</form>
  )
});

<>
  <ControlledComponent
    data={...}
    onSubmit={() => {...}}
    onChange={() => {...}}
  />
</>
```
