'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, } from 'next/navigation';
import { useRetrieveSingleSlideQuery } from '@/redux/features/authApiSlice';
import { LoadingSpinner, NavbarHorizontal } from '@/components/common';
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import axios from 'axios';
import ErrorModal from '@/components/common/ErrorModal';
import { generatePowerPoint } from '@/components/utils';

export default function DetailSlide() {
    const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const { data: slides, isLoading, isError } = useRetrieveSingleSlideQuery(id);
    const [isLoadinggg, setIsLoading] = useState(false);
    const [formData, setFormData] = useState([]);
    const [presentationName, setPresentationName] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
      };

    useEffect(() => {
        if (slides) {
            setFormData(
                slides.presentation_data.map(slide => ({
                    id: slide.id,
                    title: slide.title,
                    content: slide.content,
                    image_urls: slide.image_urls,
                }))
            );
            setPresentationName(slides.presentation_name || '');
        }
    }, [slides]);

    const handleSlideChange = (index, e) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;
        setFormData(newFormData);
    };

    const handleNameChange = (e) => {
        setPresentationName(e.target.value);
    };

    const updatePresentation = async () => {
        setIsLoading(true); 

        // const url = `http://localhost:8000/api/presentation/zlide/${id}/`;
        const url = `https://zlide-backend-production.up.railway.app/api/presentation/zlide/${id}/`;
        const updatedData = {
            presentation_data: formData,
            presentation_name: presentationName
        };

        try {
            const result = await axios.patch(url, updatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setResponse(result.data);
            router.push('/slide/dashboard'); 
            return result.data; 
        } catch (error) {
            console.error(error);
            setError(error);
            throw error; 
        } finally {
            setIsLoading(false); 
          }
    };


    // This function handles the form submission event
    const handleUpdatePresentation = async (e) => {
        e.preventDefault();
        await updatePresentation();
    };

    const handleDownloadPPT = async () => {
        try {
          const updatedData = await updatePresentation(); // Wait for update to complete
          generatePowerPoint(updatedData.presentation_data); // Generate PPT with updated data
        } catch (error) {
            setError(true);
            setShowModal(true);
          console.error("Failed to update and download PPT:", error);
        }
      };

//   const handleDownloadPDF = async () => {
//         try {
//             const updatedData = await updatePresentation(); // Wait for update to complete
//             generatePDF(updatedData.presentation_data); // Generate PPT with updated data
//           } catch (error) {
//             console.error("Failed to update and download PPT:", error);
//           }
//       };


    if (isLoading) return <LoadingSpinner />; // Show loading spinner while data is being fetched
    if (isLoadinggg) return <LoadingSpinner />; // Mineeee
    if (isError) return <p>Error loading slides</p>;

    return (
        <>
            <div className='dot-background min-h-screen w-screen flex fixed'>
                <div className='grid grid-flow-col'>
                    <div className="">
                        <NavbarHorizontal />
                    </div>
                    <div className='h-screen overflow-auto'>
                        <div className=' p-4 pr-16 mt-16 gap-24'>
                            <div className='w-full col-span-3'>
                                <h1 className='text-4xl px-8 font-semibold bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text mb-8'>Edit Slide</h1>
                                <form onSubmit={handleUpdatePresentation}>
                                    <div className='flex flex-col px-4'>
                                        <label htmlFor="presentation_name:">Presentation Name:</label>
                                        <input
                                            type="text"
                                            name="presentation_name"
                                            id="presentation_name"
                                            value={presentationName}
                                            onChange={handleNameChange}
                                            className='text-2xl font-semibold rounded-md p-4 w-96' />
                                    </div>
                                    <div className='grid grid-cols-4 mb-8'>
                                        <div className='col-span-3'>
                                            {formData.map((slides, index) => (
                                                <div key={slides.id} className='grid h-[750px] p-4 my-8'>
                                                    <div key={slides.id} className='grid bg-white shadow grid-cols-2 p-4'>
                                                        <div key={slides.id} className='justify-center p-4 gap-2 flex flex-col text-start'>
                                                            <input
                                                                type="text"
                                                                key={slides.id}
                                                                name="title"
                                                                placeholder='Enter title'
                                                                value={slides.title}
                                                                onChange={(e) => handleSlideChange(index, e)}
                                                                className='text-3xl font-bold py-2'
                                                            />
                                                            <textarea
                                                                name="content"
                                                                key={slides.id}
                                                                placeholder='Enter content'
                                                                value={slides.content}
                                                                onChange={(e) => handleSlideChange(index, e)}
                                                                className='h-64'
                                                            />
                                                        </div>
                                                        <div key={slides.id}>
                                                            {slides.image_urls && slides.image_urls.map((url, i) => (
                                                                <input type="image" key={slides.id} name="image" src={url} alt="" className='w-full p-4 object-contain h-[700px]' />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='col-span-1'>
                                            <div className='p-8 space-y-4 bg-white shadow-lg sticky top-52 rounded-lg' >
                                                <button type="submit" className='bg-[#FFD045] p-4 rounded-md w-full'>Save</button>
                                                <button type="button" onClick={handleDownloadPPT} className='bg-[#FFD045] p-4 rounded-md w-full items-center flex gap-4 justify-center'>Download as Powerpoint <PiMicrosoftPowerpointLogoFill size={25} /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ErrorModal closeModal={closeModal} />}
        </>
    )
}
