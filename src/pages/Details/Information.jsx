
import React from 'react'
import './information.css'
import { Descriptions, Divider } from 'antd'
import { CiTimer } from 'react-icons/ci'
import { RiGuideLine, RiHotelLine } from 'react-icons/ri'

const Information = ({ data }) => {

    const items = [
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
        {
            key: '3',
            label: 'Sharing Price',
            children: <p>{data?.sharing_price}</p>,
        },
        {
            key: '4',
            label: 'Triple Bed Price',
            children: <p>{`${data?.triple_bed_price} / per person`}</p>,
        },
        {
            key: '5',
            label: 'Double Bed',
            children: <p>{data?.double_bed_price}</p>,
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
