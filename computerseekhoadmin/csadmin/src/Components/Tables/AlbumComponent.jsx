import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

const colors = {
  primary: '#17252A',
  secondary: '#2B7A78',
  accent: '#3AAFA9',
  light: '#DEF2F1',
  white: '#FEFFFF'
};

// Temporary static content
const staticAlbums = [
  {
    album_id: 1,
    album_name: 'Summer Trip',
    album_description: 'Photos from the summer trip.',
    start_date: '2025-06-01T00:00',
    end_date: '2025-06-10T23:59',
    album_is_active: true,
  },
  {
    album_id: 2,
    album_name: 'Winter Wonderland',
    album_description: 'Photos from the winter wonderland.',
    start_date: '2025-12-01T00:00',
    end_date: '2025-12-10T23:59',
    album_is_active: true,
  },
  {
    album_id: 3,
    album_name: 'Spring Festival',
    album_description: 'Photos from the spring festival.',
    start_date: '2025-03-01T00:00',
    end_date: '2025-03-10T23:59',
    album_is_active: true,
  },
];

const AlbumComponent = () => {
  const [albums, setAlbums] = useState(staticAlbums); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchAlbums and other dynamic code
  /*
  const fetchAlbums = async () => {
    try {
      const response = await axios.get('/api/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const deleteAlbum = async (id) => {
    try {
      await axios.delete(`/api/albums/${id}`);
      setAlbums(albums.filter(album => album.album_id !== id));
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };
  */

  const filteredAlbums = Array.isArray(albums) ? albums.filter(album =>
    album.album_name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Album Master
        </Typography>
        <TextField
          label="Search by Album Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px' }} // Adjust width as needed
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <List>
        {filteredAlbums.map(album => (
          <ListItem key={album.album_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={album.album_name}
              secondary={album.album_description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View album', album.album_id)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit album', album.album_id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete album', album.album_id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AlbumComponent;
