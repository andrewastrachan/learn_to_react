class Api::TracksController < ApplicationController
  # respond_to :json
  before_action :find_track, only: [:show, :destroy]

  def index
    render json: {tracks: Track.all}
  end

  def show
    render json: {track: @track}
  end

  def create
    track = Track.create!(track_params)
    render json: {track: @track}
  end

  def destroy
    render json: {track: @track} if @track.destroy
  end

  private
  def track_params
    params.require(:track).permit(:name, :roll)
  end

  def find_track
    @track = Track.find(params[:id])
  end
end
