import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import IconButton from "@mui/material/IconButton";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex items-center mx-auto">
      <IconButton
        aria-label="play_icon"
        className="hover:text-rose-600 text-neutral-200"
        onClick={previous}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </IconButton>
      <IconButton
        aria-label="play_icon"
        className="hover:text-rose-600 text-neutral-200 rotate-180"
        onClick={next}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </IconButton>
    </div>
  );
};

export default ButtonGroup;
