import * as React from 'react';
import { useContext, useState } from 'react';
import * as api from '../../services/api.service';
import * as NotificationService from '../../services/notification.service';

import '../../css/form_styles.css';
import {
  ADH_DHAHIRAH,
  ADH_DHAHIRAHAr,
  AL_BURAYMI,
  AL_BURAYMIAr,
  AL_DAKHLIYAH,
  AL_DAKHLIYAHAr,
  AL_WUSTA,
  AL_WUSTAAr,
  DHOFAR,
  DHOFARAr,
  MUSANDAM,
  MUSANDAMAr,
  MUSCAT,
  MUSCATAr,
  NORTH_ASH_SHARIQIYAH,
  NORTH_ASH_SHARIQIYAHAr,
  NORTH_BATINAH,
  NORTH_BATINAHAr,
  SOUTH_ASH_SHARIQIYAH,
  SOUTH_ASH_SHARIQIYAHAr,
  SOUTH_BATINA,
  SOUTH_BATINAAr,
} from '../../constants';
import { Modal } from 'antd';
import RoomDetailsModal from './RoomDetailsModal';
import RoomDetails from './RoomDetails';
import { i18nContext } from '../../contexts/i18n.context';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Section from '../../components/Section';
import Button from '../../components/Button';
import NewStaffModal from './NewStaffModal';
import MemberDetails from './MemberDetails';
import Uploader from '../../components/Upload';

const Index = () => {
  const i18n = useContext(i18nContext);
  let govValOptions;
  if (i18n.lang === 'en') {
    govValOptions = [
      'ADH DHAHIRAH',
      'AL BURAYMI',
      'AL DAKHLIYAH',
      'AL WUSTA',
      'DHOFAR',
      'MUSANDAM',
      'MUSCAT',
      'NORTH ASH SHARIQIYAH',
      'SOUTH ASH SHARIQIYAH',
      'NORTH BATINAH',
      'SOUTH BATINA',
    ];
  } else {
    govValOptions = [
      'الظاهرة',
      'البريمي',
      'الداخلية',
      'الوسطى',
      'ظفار',
      'مسندم',
      'مسقط',
      'شمال الشرقية',
      'جنوب الشرقية',
      'شمال الباطنة',
      'جنوب الباطنة',
    ];
  }
  let diction;

  if (i18n.lang === 'en') {
    diction = {
      'ADH DHAHIRAH': ADH_DHAHIRAH,
      'AL BURAYMI': AL_BURAYMI,
      'AL DAKHLIYAH': AL_DAKHLIYAH,
      'AL WUSTA': AL_WUSTA,
      DHOFAR: DHOFAR,
      MUSANDAM: MUSANDAM,
      MUSCAT: MUSCAT,
      'NORTH ASH SHARIQIYAH': NORTH_ASH_SHARIQIYAH,
      'SOUTH ASH SHARIQIYAH': SOUTH_ASH_SHARIQIYAH,
      'NORTH BATINAH': NORTH_BATINAH,
      'SOUTH BATINA': SOUTH_BATINA,
    };
  } else {
    diction = {
      الظاهرة: ADH_DHAHIRAHAr,
      البريمي: AL_BURAYMIAr,
      الداخلية: AL_DAKHLIYAHAr,
      الوسطى: AL_WUSTAAr,
      ظفار: DHOFARAr,
      مسندم: MUSANDAMAr,
      مسقط: MUSCATAr,
      'شمال الشرقية': NORTH_ASH_SHARIQIYAHAr,
      'جنوب الشرقية': SOUTH_ASH_SHARIQIYAHAr,
      'شمال الباطنة': NORTH_BATINAHAr,
      'جنوب الباطنة': SOUTH_BATINAAr,
    };
  }

  const [state, setState] = useState<any>({
    governorate: govValOptions[0],
    roomTypes: [],
    members: [],
    crFiles: [],
    cities: diction[govValOptions[0]],
    city: diction[govValOptions[0]][0],
  });

  const {
    name,
    nameArabic,
    governorate,
    city,
    roomTypes,
    members,
    isModalVisible,
    isStaffModalVisible,
    cities,
    description,
    descriptionArabic,
    legalName,
    crPerson,
    crDetails,
    signatoryName,
    signatoryPhoneNumber,
    signatoryEmail,
    bankName,
    branch,
    accountNumber,
    focalName,
    focalEmail,
    rating,
    focalPhoneNumber,
    crNumber,
    website,
  } = state;

  const addItem = (item) => {
    setState((prev) => ({
      ...prev,
      roomTypes: prev.roomTypes.concat(item),
      isModalVisible: false,
    }));
  };

  const deleteRoom = (item) => {
    setState((prev) => ({
      ...prev,
      roomTypes: prev.roomTypes.filter((r) => r !== item),
      isModalVisible: false,
    }));
  };

  const deleteMember = (item) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.filter((r) => r !== item),
      isStaffModalVisible: false,
    }));
  };

  const addStaffMember = (member) => {
    setState((prev) => ({
      ...prev,
      members: prev.members.concat(member),
      isStaffModalVisible: false,
    }));
  };

  const register = async () => {
    const { error } = await api.register(state);
    if (error) {
      NotificationService.error(error.message);
    } else {
      NotificationService.success('Hotel successfully registered');
    }
  };

  const showModal = () => {
    setState((prev) => ({ ...prev, isModalVisible: true }));
  };

  const showStaffModal = () => {
    setState((prev) => ({ ...prev, isStaffModalVisible: true }));
  };

  const onClose = () => {
    setState((prev) => ({
      ...prev,
      isModalVisible: false,
      isStaffModalVisible: false,
    }));
  };

  return (
    <>
      <div className="container mainTextDir">
        <div style={{ width: '40rem' }}>
          <h1 style={{ fontWeight: 'bold' }} id="registrationPage">
            Registration Page
          </h1>
          <div style={{ textAlign: 'center' }}>
            <img
              src="css/images/register_image.png"
              style={{ width: '30rem' }}
            />
          </div>

          <Section
            title="Hotel Details"
            description="Please enter your hotel details below, in both Arabic and English."
          />

          <Input
            value={name}
            label="Hotel Name"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, name: text }))
            }
          />
          <Input
            value={nameArabic}
            label="Hotel Name (Arabic)"
            direction={true}
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, nameArabic: text }))
            }
          />
          <Input
            value={website}
            label="Hotel Website"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, website: text }))
            }
          />
          <Select
            onChange={(val) =>
              setState((prevState) => ({
                ...prevState,
                cities: diction[governorate],
                governorate: val,
              }))
            }
            label="Governorate"
            value={governorate}
            options={govValOptions}
          />
          <Select
            label="City/Welayat"
            value={city}
            onChange={(val) =>
              setState((prevState) => ({ ...prevState, city: val }))
            }
            options={cities}
          />
          <div className="form-group govern">
            <select
              style={{ marginTop: '0.5rem' }}
              value={rating}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  rating: e.target.value,
                }))
              }
              required
              id="valStars"
            >
              <option value="star" id="selectStars">
                Select stars
              </option>
              <option value="1" key={1}>
                ⭐
              </option>
              <option value="2" key={2}>
                ⭐⭐
              </option>
              <option value="3" key={3}>
                ⭐⭐⭐
              </option>
              <option value="4" key={4}>
                ⭐⭐⭐⭐
              </option>
              <option value="5" key={5}>
                ⭐⭐⭐⭐⭐
              </option>
            </select>
            <label htmlFor="select" className="control-label" id="stars">
              Hotel Star Rating
            </label>
            <i className="bar" />
          </div>
          <Input
            value={description}
            label="Hotel Description"
            type="textarea"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, description: text }))
            }
          />
          <Input
            value={descriptionArabic}
            label="Hotel Description (Arabic)"
            type="textarea"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                descriptionArabic: text,
              }))
            }
            direction={true}
          />

          <Section
            title="Hotel CR Details"
            description="Please enter the details of your hotel’s Company Registration. eMushrif will use these details to draft a business contract between your hotel and eMushrif."
          />
          <Input
            value={legalName}
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, legalName: text }))
            }
            label="Legal Company Name (as written on CR)"
          />
          <Input
            value={crNumber}
            label="CR Number"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, crNumber: text }))
            }
          />
          <Input
            value={crPerson}
            label="Contact Person (as listed on CR)"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, crPerson: text }))
            }
          />
          <Input
            value={crDetails}
            label="Contact Details (as listed on CR)"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, crDetails: text }))
            }
          />
          <Input
            value={signatoryName}
            label="Authorized Signatory Name"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, signatoryName: text }))
            }
          />
          <Input
            value={signatoryPhoneNumber}
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                signatoryPhoneNumber: text,
              }))
            }
            label="Authorized Signatory Phone Number"
          />
          <Input
            value={signatoryEmail}
            label="Authorized Signatory Email"
            type="email"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, signatoryEmail: text }))
            }
          />
          <Uploader
            onUpload={(text) =>
              setState((prevState) => ({ ...prevState, crFiles: text }))
            }
          />

          <Section
            title="Hotel Bank Details"
            description="Please enter the details of your hotel's bank account. eMushrif will use these details to set up the reconciliation process with your hotel. Reconciliation between eMushrif and the hotels will happen weekly.

eMushrif will collect the clients' advanced payments, deduct its 10%  fee, and pass on the hotels' payments."
          />
          <Input
            value={bankName}
            label="Bank Name"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, bankName: text }))
            }
          />
          <Input
            value={branch}
            label="Branch"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, branch: text }))
            }
          />
          <Input
            value={accountNumber}
            label="Bank Account Number"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, accountNumber: text }))
            }
          />

          <Section
            title="Hotel Focal Point"
            description="Please share the name and the contact details of the focal point within your hotel. The focal point needs to be a person that eMushrif can communicate with when needed."
          />
          <Input
            value={focalName}
            label="Focal Point Name"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, focalName: text }))
            }
          />
          <Input
            value={focalEmail}
            label="Focal Point Email"
            type="email"
            onInput={(text) =>
              setState((prevState) => ({ ...prevState, focalEmail: text }))
            }
          />
          <Input
            value={focalPhoneNumber}
            label="Focal Point Phone Number"
            onInput={(text) =>
              setState((prevState) => ({
                ...prevState,
                focalPhoneNumber: text,
              }))
            }
          />

          <Section
            title="Sahala Access"
            description="Please share the information about the staff you would like to provide Sahala platform access to. The staff will be able to log into the platform using either their mobile number or email.

Please enter the details of a minimum of 2 and a maximum of 5 staff members. "
          />

          <MemberDetails details={members} onDelete={deleteMember} />
          <Button
            withIcon={true}
            text="Add A New Staff Member"
            onClick={showStaffModal}
            type="primary"
          />

          <Section
            title="Room Type Details"
            description="Please enter the details of the room types that you would like to display on the platform. Please make sure this information is accurate, as eMushrif will showcase it directly on the Sahala platform."
          />

          <RoomDetails details={roomTypes} onDelete={deleteRoom} />

          <Button
            withIcon={true}
            text="Add A New Room Type"
            onClick={showModal}
            type="primary"
          />

          <Button
            text="Submit Registration Form"
            onClick={register}
            fullWidth={true}
          />
          <br />
          <br />
        </div>
      </div>
      <NewStaffModal
        isVisible={isStaffModalVisible}
        onOk={addStaffMember}
        onClose={onClose}
      />
      <RoomDetailsModal
        isVisible={isModalVisible}
        onOk={addItem}
        onClose={onClose}
      />
    </>
  );
};

export default Index;
