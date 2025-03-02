import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

import Typography from '@mui/material/Typography'
import { MapPin, Briefcase, Wallet } from 'lucide-react'
import Divider from '@mui/material/Divider'
import { Link, useParams } from 'react-router-dom'
import {
  JobInfo,
  JobModal,
  SinglePageInfo,
} from '../../components/Footer/Careers'
import jobsData from '../../data/jobsData.json'

const SingleJob = () => {
  const { id } = useParams()

  const job = jobsData.find((job) => job.id === Number(id))
  const {
    position,
    mode,
    location,
    pay,
    description,
    responsibilities,
    qualifications,
    experience,
    security_clearance,
    how_to_apply,
    equal_opportunity,
  } = job

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <Link to="/careers">
        <div className="flex gap-x-4 mb-10">
          <ArrowLeft />
          <h3>back to list</h3>
        </div>
      </Link>
      <Card sx={{ maxWidth: 900 }} className="mx-auto">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="font-bold"
          >
            {position}
          </Typography>
          {/* card content */}
          <div className="mt-6 flex flex-wrap gap-y-2 gap-x-8">
            <JobInfo text={location} icon={<MapPin />} />
            <JobInfo text={mode} icon={<Briefcase />} />
            <JobInfo text={pay} icon={<Wallet />} />
          </div>
        </CardContent>
        <Divider className="mt-2" />
        <CardContent className="text-justify px-8">
          <h4 className="font-bold lg:text-lg  py-4">
            <span>Job Title: </span>
            {position}
          </h4>

          <SinglePageInfo
            description={description}
            responsibilities={responsibilities}
            qualifications={qualifications}
            experience={experience}
            security_clearance={security_clearance}
            how_to_apply={how_to_apply}
            equal_opportunity={equal_opportunity}
          />
        </CardContent>
        <CardActions className="flex justify-center items-center pb-4">
          <JobModal />
        </CardActions>
      </Card>
    </section>
  )
}

export default SingleJob
