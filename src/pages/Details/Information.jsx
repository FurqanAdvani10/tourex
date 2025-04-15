
import React from 'react'
import './information.css'
import { Descriptions, Divider } from 'antd'
import { CiTimer } from 'react-icons/ci'
import { RiGuideLine, RiHotelLine } from 'react-icons/ri'

const Information = ({ data }) => {

    const items = [
        ...(data?.Inclusive?.length ? [{
            key: '3',
            label: 'Inclusive',
            children: <p>{data?.Inclusive}</p>,
        }] : []),
        {
            key: '1',
            label: 'Destination',
            children: <p>{data?.destination}</p>,
        },
        {
            key: '2',
            label: 'Departure',
            children: <p>{data?.departure}</p>,
        },
        {
            key: '2',
            label: 'Ticket',
            children: <p>{data?.tickets}</p>,
        },
        {
            key: '2',
            label: 'Food Included',
            children: <p>{data?.food_included}</p>,
        },
        ...(data?.jeep?.length ? [{
            key: '3',
            label: 'Jeep',
            children: <p>{data?.jeep}</p>,
        }] : []),
        ...(data?.Group_tour?.length ? [{
            key: '3',
            label: 'Group / Per Head ',
            children: <p>{data?.Group_tour}</p>,
        }] : []),
        ...(data?.couple?.length ? [{
            key: '4',
            label: 'Couple',
            children: <p>{data?.couple}</p>,
        }] : []),
        {
            key: '5',
            label: 'Package Cost',
            children: <p>{data?.package_cost}</p>,
        },
        {
            key: '6',
            label: 'Payment Schedule',
            children: <p>{data?.payment_schedule}</p>,
        },
    ];


    return (
        <div className='information-main'>

            <div className="information-heading">
                <h4 className='p-0 m-0'>{data?.name}</h4>
                <Divider />
            </div>
            <div className="information-content">
                <p>{data?.description}</p>
                <div className="information-items">
                    <div className="item-with-icon">
                        <i><CiTimer /></i>
                        <h5 className='p-0 m-0'>{data?.days} Days</h5>
                    </div>
                    <div className="item-with-icon">
                        <i><RiHotelLine /></i>
                        <h5 className='p-0 m-0'>Hotels</h5>
                    </div>
                    <div className="item-with-icon">
                        <i><RiGuideLine /></i>
                        <h5 className='p-0 m-0'>Tour Guide</h5>
                    </div>
                </div>
            </div>
            <Divider />
            <Descriptions
                items={items}
                column={1}
                className='custom-description'
            />
        </div>
    )
}

export default Information
