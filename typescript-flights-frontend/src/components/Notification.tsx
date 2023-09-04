import styled from "styled-components";

const StyledNotification = styled.div`
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const Notification = ({ error }: { error: string }) => {
  if (error === "") {
    return null;
  }

  return (
    <StyledNotification>
      <p>{error}</p>
    </StyledNotification>
  );
};

export default Notification;
