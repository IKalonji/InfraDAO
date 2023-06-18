import React, { Component } from 'react'
import {Chip} from 'primereact/chip'
import { Button } from 'primereact/button'
import './Styles/View-Project.style.css'

export default class ViewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: ''
        };
      }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const encodedData = query.get('data');
        const decodedData = JSON.parse(decodeURIComponent(encodedData));
        const { name, description } = decodedData;
        this.setState({ name, description });
      }

  render() {
    const { name, description } = this.state;
    return (
      <div>

        <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Project Amount</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-money-bill text-blue-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">44%+ new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Tokens Allocated</span>
                            <div className="text-900 font-medium text-xl">$2.100</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">%52+ </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Token Price</span>
                            <div className="text-900 font-medium text-xl">$28441</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">520  </span>
                    <span className="text-500">newly registered</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Comments</span>
                            <div className="text-900 font-medium text-xl">152 Unread</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-comment text-purple-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span>
                </div>
            </div>
        </div>

        <div className='horizontal-spacer' ></div>
        <div className="surface-0">
            <div className="font-medium text-3xl text-900 mb-3">
                {name}
                <div className="mt-3 lg:mt-0">
                <Button label="Buy Tokens" className="mr-3 p-button-raised"/>
                </div>
                

            </div>
            <div className="text-500 mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Title</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                        <Chip label="Crime" className="mr-2" />
                        <Chip label="Drama" className="mr-2" />
                        <Chip label="Thriller" />
                    </div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Director</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Actors</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Plot</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                        A group of professional bank robbers start to feel the heat from police
                        when they unknowingly leave a clue at their latest heist.</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" />
                    </div>
                </li>
            </ul>
        </div>
    
    
      </div>
    )
  }
}
