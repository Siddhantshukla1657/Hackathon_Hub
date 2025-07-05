import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, DollarSign, AlertCircle } from 'lucide-react';

const eventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  startDate: z.string().min(1, 'Start date is required'),
  startTime: z.string().min(1, 'Start time is required'),
  endDate: z.string().min(1, 'End date is required'),
  endTime: z.string().min(1, 'End time is required'),
  location: z.string().min(1, 'Location is required'),
  maxParticipants: z.string().transform(Number).pipe(
    z.number().min(1, 'Must have at least 1 participant')
  ),
  isVirtual: z.boolean(),
});

type EventFormData = z.infer<typeof eventSchema>;

const HostEventPage = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const startDate = watch('startDate');
  const startTime = watch('startTime');
  const endDate = watch('endDate');
  const endTime = watch('endTime');

  const calculateDuration = () => {
    if (!startDate || !startTime || !endDate || !endTime) return null;

    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
    const durationHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

    return durationHours;
  };

  const isPaidEvent = () => {
    const duration = calculateDuration();
    return duration !== null && (duration > 2 || !isSameDay(startDate, endDate));
  };

  const isSameDay = (date1: string, date2: string) => {
    return date1 === date2;
  };

  const onSubmit = async (data: EventFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const duration = calculateDuration();
      if (duration === null) {
        setError('Invalid date/time combination');
        return;
      }

      if (isPaidEvent()) {
        // Handle paid event creation
        navigate('/pricing');
        return;
      }

      // Handle free event creation
      console.log('Creating free event:', data);
      navigate('/events');
    } catch (err) {
      setError('Failed to create event. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Host a New Event</h1>
        <p className="text-gray-600">Create and manage your hackathon event.</p>
      </div>

      {error && (
        <div className="mb-6 bg-error-50 border border-error-200 rounded-md p-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-error-400" />
            <div className="ml-3">
              <p className="text-sm text-error-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              {...register('title')}
              type="text"
              className="form-input"
              placeholder="Enter event title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-error-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              {...register('description')}
              rows={4}
              className="form-input"
              placeholder="Describe your event"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-error-600">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('startDate')}
                  type="date"
                  className="form-input pl-10"
                />
              </div>
              {errors.startDate && (
                <p className="mt-1 text-sm text-error-600">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('startTime')}
                  type="time"
                  className="form-input pl-10"
                />
              </div>
              {errors.startTime && (
                <p className="mt-1 text-sm text-error-600">{errors.startTime.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('endDate')}
                  type="date"
                  className="form-input pl-10"
                  min={startDate}
                />
              </div>
              {errors.endDate && (
                <p className="mt-1 text-sm text-error-600">{errors.endDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('endTime')}
                  type="time"
                  className="form-input pl-10"
                />
              </div>
              {errors.endTime && (
                <p className="mt-1 text-sm text-error-600">{errors.endTime.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('location')}
                type="text"
                className="form-input pl-10"
                placeholder="Event location or virtual platform"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-error-600">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Participants
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('maxParticipants')}
                type="number"
                className="form-input pl-10"
                placeholder="Enter maximum number of participants"
              />
            </div>
            {errors.maxParticipants && (
              <p className="mt-1 text-sm text-error-600">{errors.maxParticipants.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              {...register('isVirtual')}
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700">
              This is a virtual event
            </label>
          </div>

          {isPaidEvent() && (
            <div className="bg-warning-50 border border-warning-200 rounded-md p-4">
              <div className="flex">
                <DollarSign className="h-5 w-5 text-warning-400" />
                <div className="ml-3">
                  <p className="text-sm text-warning-700">
                    This event requires a paid plan as it's longer than 2 hours or spans multiple days.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? 'Creating...' : isPaidEvent() ? 'Continue to Pricing' : 'Create Event'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostEventPage;