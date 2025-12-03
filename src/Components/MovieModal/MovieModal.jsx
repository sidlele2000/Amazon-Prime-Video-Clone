import { Modal, Box, Typography, CardMedia, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';

const imageurl = "https://image.tmdb.org/t/p/original";
function MovieModal({ open, item, close }) {
    const imageSrc = item.poster_path ? imageurl + item.poster_path : "/placeholder.jpg";
    const title = item.title || item.name;
    const year = item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4) || "N/A";
    const rating = item.vote_average;
    const overview = item.overview;

    return (
        <Modal
            open={open}
            close={close}
            aria-labelledby="movie-title"
            aria-describedby="movie-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: 800 },
                    bgcolor: "#000",
                    borderRadius: 3,
                    boxShadow: 24,
                    borderColor: "#fff",
                    p: 4,
                    color: "#fff",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                <IconButton
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "#fff",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                    }}
                >
                    <CloseIcon onClick={close} />
                </IconButton>
                <Typography id="movie-title" variant="h4" fontWeight="700" mb={2}>
                    {title}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 250, borderRadius: 2 }}
                        image={imageSrc}
                        alt={title}
                    />
                    <Box sx={{ flex: 1 }}>
                        <Typography sx={{ mb: 1, fontSize: 20 }}>
                            <strong>Year:</strong> {year}
                        </Typography>
                        <Typography sx={{ mb: 1, fontSize: 20 }}>
                            <strong>Rating:</strong> {rating}
                        </Typography>
                        <Typography sx={{ mb: 1, fontSize: 20 }}>
                            <strong>Overview:</strong>
                        </Typography>
                        <Typography id="movie-description" sx={{ fontSize: 20 }}>
                            {overview}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            <IconButton
                                sx={{ backgroundColor: "darkgrey", color: "white", "&:hover": { backgroundColor: "#555" } }}
                            >
                                <PlayCircleOutlineIcon fontSize="25" />
                            </IconButton>
                            <IconButton
                                sx={{ backgroundColor: "darkgrey", color: "white", "&:hover": { backgroundColor: "#555" } }}
                            >
                                <AddIcon fontSize="25" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Modal>
    );
}

export default MovieModal;
