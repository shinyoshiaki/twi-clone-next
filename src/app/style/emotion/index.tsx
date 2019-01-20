import styled from "@emotion/styled";

export const Button = styled.button(
  (_: {
    size?: string;
    color?: string;
    background?: string;
    hover?: string;
  }) => ({
    minWidth: 100,
    height: 32,
    borderRadius: 5,
    border: "none",
    padding: "0 16",
    color: _.color ? _.color : "white",
    background: _.background ? _.background : "#66747E",
    ":hover": { background: _.hover ? _.hover : "#259FF2" }
  })
);

export const Input = styled.input({
  borderRadius: 5,
  borderColor: "gray",
  borderWidth: 1
});

export const Middle = styled.div({
  width: "100%",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
});

export const Center = styled.div((props: { row?: boolean }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: props.row ? "row" : "column"
}));

export const Segment = styled.div((props: { nospace?: boolean }) => ({
  borderWidth: 1,
  border: "thin solid",
  borderColor: "#66747E",
  background: "white",
  margin: props.nospace ? 0 : 10,
  padding: 10
}));

export const Container = styled.div({
  padding: 20,
  paddingLeft: "20%"
});

export const Divider = styled.div({
  borderBottom: "thin solid",
  borderColor: "#66747E",
  marginTop: 10
});

export const Header = styled.div({});

export const TextArea = styled.textarea({
  borderRadius: 10,
  width: "100%",
  resize: "none"
});
