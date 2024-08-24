# Advanced React

Learning Advanced React concepts, Design System, Design Patterns, Performance

## Resources

[Udemy Course](https://www.udemy.com/course/advanced-react)

# Design Patterns

### Layout Components

- They focus on organizing other components within a web page.
  - Layout Components Patterns
    - Split Screen
    - Lists
    - Modals
- The core content components of our pages, should be unaware and unconcerned about their precise location within the page structure. Meaning children of a layout component shouldn't care about there position on the page just how they look.

### Container Components

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
