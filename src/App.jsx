import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  const onPressLearnMore = () => {
    alert('You tapped the button!');
  };
  const onClickRoute = () => {
    navigate("/exercise1"); 
  };

  return (
    <>
      <header className="flex-col align-center justify-start gap-1 p-2">
        <h1>Exercise Board</h1>
        <h2>This will be a simple exercise board paginated to go over CSS and React.</h2>
        <h2>Simply a project for me to enjoy!</h2>
      </header>

      <div className="flex align-center justify-start gap-8 p-8">
        <Button
          onClick={onPressLearnMore}
          variant="contained"
          style={{ backgroundColor: "#b8b8b8ff" }}
        >
          Alert Stlye
        </Button>
        <Button
          onClick={onClickRoute}
          variant="contained"
          style={{ backgroundColor: "#b8b8b8ff" }}
        >
          Exercise 1
        </Button>
      </div>
    </>
  );
};

export default App;