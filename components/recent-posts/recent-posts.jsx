import Grid from "@mui/material/Grid";

export default function RecentPosts() {
  return (
    <Grid container style={{ marginTop: "20px" }}>
      <Grid item xs={12} md={12}>
        Recent blog posts
      </Grid>
      <Grid item xs={12} md={12} xl={6}>
        <div>image</div>
        <div>date</div>
        <div>title</div>
        <div>place</div>
        <div>content</div>
        <div>tags</div>
      </Grid>
      <Grid item xs={12} md={12} xl={6}>
        <Grid item xs={12} md={12} xl={6}>
          <div>image</div>
          <div>date</div>
          <div>title</div>
          <div>place</div>
          <div>content</div>
          <div>tags</div>
        </Grid>
        <Grid item xs={12} md={12} xl={6}>
          <div>image</div>
          <div>date</div>
          <div>title</div>
          <div>place</div>
          <div>content</div>
          <div>tags</div>
        </Grid>
      </Grid>
    </Grid>
  );
}
