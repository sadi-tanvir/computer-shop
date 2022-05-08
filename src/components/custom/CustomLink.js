import { Link,useResolvedPath,useMatch } from "react-router-dom";


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });


    const styleNave = {
      color:match ? '#b91c1c':'#4b5563',
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 7,
      marginLeft: 15,
      borderBottom: match ? '3px solid #b91c1c' : '3px solid #e5e7eb'
    }
  
    return (
      <div>
        <Link
          style={styleNave}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }



  export default CustomLink