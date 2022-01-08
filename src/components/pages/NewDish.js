import React, {useContext} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {FirebaseContext} from '../../firebase'


const NewOrder = () => {
    // add the context with the firebase operation
    const {firebase}= useContext(FirebaseContext);
    console.log(firebase);

    // validation and processing of data
    const formik = useFormik({
        initialValues:{
            name: '',
            price: '',
            category: '',
            image: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(3, 'Name must be at least 3 characters long')
            .required('The name of the dish is mandatory'),
            price: Yup.string()
            .min(1,'A number must be added')
            .required('The price is mandatory'),
            category: Yup.string()
            .required('The category is mandatory'),
            description: Yup.string()
            .min(10, 'descriptuion must be at least 10 characters long')
            .required('the description is mandatory')
        }),
        onSubmit: data =>{
            console.log(data);
        }
    })

    return (
        <>
            <h1 className='text-3xl font-light mb-4'>New dish</h1>
            <div className='flex justify-center mt-10 '>
                <div className='w-full max-w-3xl'>
                    <form
                    onSubmit={formik.handleSubmit}
                    >
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'
                            >Name</label>
                            <input
                                id='name'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='text'
                                placeholder='Name of the dish'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                            <div role='alert' className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.name}</p>
                            </div>
                        ): null}
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'
                            >Price</label>
                            <input
                                id='price'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type='number'
                                placeholder='Price of the dish'
                                min='0'
                                value={formik.values.price}
                                onChange={formik.handleChange}

                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.price && formik.errors.price ? (
                            <div role='alert' className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                <p className='font-bold'>Error</p>
                                <p>{formik.errors.price}</p>
                            </div>
                        ): null}
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'
                            >category</label>
                            <select
                                id='category'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value=''>-- Select --</option>
                                <option value='breakfast'>breakfast</option>
                                <option value='dinner'>Dinner</option>
                                <option value='lunch'>Lunch</option>
                                <option value='dessert'>dessert</option>
                                <option value='drinks'>drinks</option>
                                <option value='salads'>salads</option>
                            </select>
                        </div>
                            {formik.touched.category && formik.errors.category ? (
                                <div role='alert' className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.category}</p>
                                </div>
                            ): null}
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'
                            >Image</label>
                            <input
                            value={formik.values.image}
                            onChange={formik.handleChange}
                                id='image'
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ring-blue-500 focus:ring-1 focus:shadow-outline'
                                type='file'
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'
                            >Description</label>
                            <textarea
                                id='description'
                                className='h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                placeholder='Description of the dish'
                                min='0'
                                onBlur={formik.handleBlur}
                            ></textarea>
                            {formik.touched.description && formik.errors.description ? (
                                <div role='alert' className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.description}</p>
                                </div>
                            ): null}
                            <input
                            type='submit'
                            className='bg-gray-800 hover:bg-gray-900 text-white font-bold w-full mt-5 p-2'
                            value='Add dish'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default NewOrder;