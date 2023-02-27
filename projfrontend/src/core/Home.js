import React from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from './Base';

export default function Home() {
    return (
        <Base title='Home Page'>
            <h1 className='text-white'>
                <div class="row">
                    <div class="col-4">
                        <button class="btn btn-success"> Test </button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-success"> Test </button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-success"> Test </button>
                    </div>

                </div>
            </h1>
        </Base>
    )
}       
