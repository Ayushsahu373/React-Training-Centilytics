import useToggle from "./UseToggleHook";
function PasswordInput() {
    const { value: showPassword, toggle } = useToggle(false);
  
    return (
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
        />
        <button onClick={toggle}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
      </div>
    );
  }
  
  export default PasswordInput;