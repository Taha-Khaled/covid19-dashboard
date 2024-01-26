import styled from "styled-components";
import { useGetStates } from "../../hooks/useGetStates";
import { useAppDispatch } from "../../stateManager/store";
import Select from "react-select";
import {
  changeState,
  selectState,
} from "../../stateManager/features/stateSlice";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import { memo } from "react";

const SelectState = styled.div`
  width: 250px;
  color: black;
  margin: 0 auto;
`;

const Container = styled.div`
  height: 100px;
  width: 100%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 15px;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;
const SelectUsState = () => {
  const { data, isLoading } = useGetStates();
  const dispatch = useAppDispatch();
  const { state } = useSelector(selectState);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <SelectState>
          <Title>Select Us State</Title>
          <Select
            placeholder="Select State"
            onChange={(e) => dispatch(changeState(e))}
            defaultValue={{ label: "All", value: "all" }}
            value={state}
            isClearable
            isSearchable
            name="state"
            options={data}
          />
        </SelectState>
      )}
    </Container>
  );
};
export default memo(SelectUsState);
