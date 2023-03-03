import React from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from './Base';

export default function Home() {
    return (
        <Base title='Home Page' description='Welcome to the T-Shirt Store'>
            <h1 className='text-white'>
                <div class="row">
                    <div className="col-4">
                        <button className="btn btn-success"> Test </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success"> Test </button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-success"> Test </button>
                    </div>

                </div>
            </h1>
        </Base>
    )
}       
