import * as React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import Select from '../../components/Select';
import Input from '../../components/Input';
import { RegisterRoomTypesDto } from '../../services/dto/register-room-types.dto';
import Button from '../../components/Button';

const RoomDetailsModal = (props) => {
  const { isVisible, onOk, onClose } = props;
  const [details, setDetails] = useState<RegisterRoomTypesDto>({
    beds: 0,
    description: '',
    descriptionArabic: '',
    price: 0,
    roomsCount: 0,
    type: '',
  });

  const addItem = () => {
    onOk(details);
    setDetails({
      beds: 0,
      description: '',
      descriptionArabic: '',
      price: 0,
      roomsCount: 0,
      type: '',
    });
  };

  const onCancel = () => {
    setDetails({
      beds: 0,
      description: '',
      descriptionArabic: '',
      price: 0,
      roomsCount: 0,
      type: '',
    });
    onClose();
  };

  const roomTypes = [];

  const renderFooter = () => {
    return (
      <Button
        text="Add Room Type"
        onClick={addItem}
        type="primary"
        fullWidth={true}
      />
    );
  };

  return (
    <Modal
      title={null}
      visible={isVisible}
      okText="Submit"
      onOk={() => onOk}
      footer={renderFooter()}
      onCancel={onCancel}
    >
      <img src="../../assets/illustration.svg" />
      <div className="modal-description">
        Please enter the details of the staff member you would like to provide
        Sahala access to.
      </div>
      <form>
        <Select label="Room Type" value={details.type} options={roomTypes}
                onChange={val => setDetails((prevState) => ({ ...prevState, type: val }))}
        />
        <Input
          value={details.beds}
          type="number"
          label="Number of Beds"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, beds: text }))
          }
        />
        <Input
          value={details.roomsCount}
          type="number"
          label="Number of Rooms of this Type"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, roomsCount: text }))
          }
        />
        <Input
          value={details.price}
          type="number"
          label="Price (OMR)"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, price: text }))
          }
        />
        <Input
          value={details.description}
          label="Room Description"
          type="textarea"
          onInput={(text) =>
            setDetails((prevState) => ({ ...prevState, description: text }))
          }
        />
        <Input
          value={details.descriptionArabic}
          label="Room Description (Arabic)"
          onInput={(text) =>
            setDetails((prevState) => ({
              ...prevState,
              descriptionArabic: text,
            }))
          }
          direction={true}
          type="textarea"
        />
      </form>
    </Modal>
  );
};

export default RoomDetailsModal;
