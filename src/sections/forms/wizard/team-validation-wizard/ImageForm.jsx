import PropTypes from 'prop-types';
// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { Input } from '@mui/material';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

// project-imports
import AnimateButton from 'components/@extended/AnimateButton';
import DragDropFileUpload from 'components/DragDropFileUpload';
// import DragDropFileUpload from 'components/DragDropFileUpload';

const validationSchema = yup.object({
  imageSrc: yup
    .mixed()
    .required('Image is required')
    .test('fileType', 'Only image files are allowed', (value) => {
      return value && value.type && value.type.startsWith('image/');
    })
});

// ==============================|| VALIDATION WIZARD - TEXT  ||============================== //

export default function ImageForm({ data, setData, handleNext, handleBack }) {
  const formik = useFormik({
    initialValues: {
      imageSrc: data.imageSrc ?? null
    },
    validationSchema,
    onSubmit: (values) => {
      setData({
        ...data,
        imageSrc: values.imageSrc
      });
      handleNext();
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Images of the page
      </Typography>
      <form onSubmit={formik.handleSubmit} id="validation-forms">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel>Portrait image of member</InputLabel>
              <DragDropFileUpload formik={formik} name="imageSrc" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                Back
              </Button>
              <AnimateButton>
                <Button variant="contained" type="submit" sx={{ my: 3, ml: 1 }} onClick={() => setErrorIndex(1)}>
                  Next
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

ImageForm.propTypes = {
  data: PropTypes.any,
  setData: PropTypes.func,
  handleNext: PropTypes.func,
  setErrorIndex: PropTypes.func
};
