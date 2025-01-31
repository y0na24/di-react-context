import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  color: "white",
  bgcolor: "background.paper",
  border: "2px solid #555",
  boxShadow: 24,
  p: 4,
};

export const UnauthorizedUserModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [open, setOpen] = useState(isOpen);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Вы не авторизованы
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "white" }}>
          Авторизуйтесь и попробуйте снова
        </Typography>
      </Box>
    </Modal>
  );
};
