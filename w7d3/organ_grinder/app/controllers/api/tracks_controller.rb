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
    render json: @track.to_json
  end

  def destroy
    render json: {track: @track} if @track.destroy
  end

  private
  def track_params
    params.require(:track).permit(:name, :roll => [:time, notes: []])
  end

  def find_track
    @track = Track.find(params[:id])
  end
end
