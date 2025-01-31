import {
  Box,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useGameRegisterDeps } from "./deps";
import { FormEvent, useState } from "react";

const initialState = {
  game: "",
  category: "",
};

export const GameRegisterForm = () => {
  const { renderAuthNotification, isUserAuthorized } = useGameRegisterDeps();

  const [formFields, setFormFields] = useState(initialState);
  const [showNotification, setShowNotification] = useState(false);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isUserAuthorized) return setShowNotification(true);

    console.log(formFields);
    setFormFields(initialState);
  };

  if (showNotification) {
    return renderAuthNotification(true, () => setShowNotification(false));
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "300px",
      }}
    >
      <Box
        p="15px"
        bgcolor="white"
        borderRadius="15px"
        width={350}
        sx={{
          mt: "20px",
        }}
      >
        <Typography>Добавьте игру</Typography>
        <form onSubmit={onFormSubmit}>
          <FormControl
            sx={{
              display: "flex",
              gap: "20px",
            }}
            fullWidth
          >
            <TextField
              onChange={onFormChange}
              value={formFields.game}
              name="game"
              label="Название игры"
              variant="standard"
              autoComplete="off"
            />
            <TextField
              onChange={onFormChange}
              value={formFields.category}
              name="category"
              label="Категория"
              variant="standard"
              autoComplete="off"
            />
            <Button
              type="submit"
              sx={{
                placeSelf: "end",
                justifySelf: "end",
              }}
              variant="contained"
            >
              Добавить
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};
