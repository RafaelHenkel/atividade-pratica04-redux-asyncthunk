import Card from '@mui/material/Card';
import { Box, Grid2 as Grid, Typography } from '@mui/material';

interface MyCardProps {
  data: {
    image: string;
    name: string;
    wizard: boolean;
    house: string;
  }[];
}

export default function MyCard({ data }: MyCardProps) {
  return (
    <Grid container spacing={2} marginTop="1rem">
      {data.map(item => (
        <Grid size={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Box
              sx={{
                background: `url(${item.image})`,
                backgroundSize: 'cover',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                color: '#fff',
                padding: '10px',
              }}
            >
              <Typography variant="h6" fontWeight="700">
                {item.name}
              </Typography>
              <Typography fontWeight="300">Bruxo: {item.wizard ? 'Sim' : 'Não'}</Typography>
              <Typography fontWeight="300">Casa: {item.house || 'Não possui!'}</Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
