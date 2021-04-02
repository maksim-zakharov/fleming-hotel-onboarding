import * as React from 'react';

import '../../css/form_styles.css';
import { RegisterRoomTypesDto } from '../../services/dto/register-room-types.dto';

const RoomDetails: React.FC<{ details: RegisterRoomTypesDto[]; onDelete }> = ({
  details,
  onDelete,
}) => {
  return (
    <>
      {' '}
      {details?.length > 0 &&
        details.map((item, key) => (
          <div className="details-container" key={key}>
            <div className="row">
              <div>Room Type:</div>
              <div>{item.type}</div>
            </div>
            <div className="row">
              <div>Number of Beds</div>
              <div>{item.beds}</div>
            </div>
            <div className="row">
              <div>Number of Room of this Type</div>
              <div>{item.roomsCount}</div>
            </div>
            <div className="row">
              <div>Price</div>
              <div>{item.price}</div>
            </div>
            <div className="row">
              <div>Description</div>
              <div>{item.description}</div>
            </div>
            <div className="row">
              <div>Description (Arabic)</div>
              <div>{item.descriptionArabic}</div>
            </div>
            <button className="delete-btn" onClick={() => onDelete(item)}>
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default RoomDetails;
